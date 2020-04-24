from rest_framework import serializers
from .models import *


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nick_name = serializers.CharField(max_length=50)
    first_name = serializers.CharField(required=False, allow_blank=True, max_length=20)
    last_name = serializers.CharField(required=False, allow_blank=True, max_length=20)
    birth_day = serializers.DateField()
    email = serializers.EmailField(max_length=50)
    password = serializers.CharField(min_length=8, max_length=50)
    is_admin = serializers.BooleanField(default=False)

    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validate data.
        """
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `User` instance, given the validated data.
        """
        instance.nick_name = validated_data.get('nick_name', instance.nick_name)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.birth_day = validated_data.get('birth_day', instance.birth_day)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.is_admin = validated_data.get('is_admin', instance.is_admin)
        instance.save()
        return instance


class GenreSerializer(serializers.Serializer):
    # name = models.CharField(default="", unique=True, max_length=50)
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=50)

    def create(self, validated_data):
        return Genre.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'genre', 'description', 'last_upd']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'author', 'comment_text', 'publish_date', 'book']