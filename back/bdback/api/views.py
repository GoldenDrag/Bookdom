import _json
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from .models import User, Book, Genre
from django.db import models
from .serializers import UserSerializer, GenreSerializer, BookSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.request import Request
from rest_framework.response import Response


class GenreListAPIView(APIView):
    def get(self, request):
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = GenreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GenreDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Genre.objects.get(id=id)
        except Genre.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, genre_id):
        genre = self.get_object(genre_id)
        serializer = GenreSerializer(genre)
        return Response(serializer.data)

    def put(self, request, genre_id):
        genre = self.get_object(genre_id)
        serializer = GenreSerializer(instance=genre, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, genre_id):
        genre = self.get_object(genre_id)
        genre.delete()

        return Response({'deleted': True})


@api_view(['GET', 'POST'])
@permission_classes([AllowAny, ])
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated, ])
def user_detail(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        user.delete()

        return Response({'deleted': True})
