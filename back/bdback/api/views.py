import _json
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from .models import User, Book, Genre
from django.db import models
from .serializers import UserSerializer, GenreSerializer, BookSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
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


class GenreDetailAPIView(APIView):\

    def get_object(self, id):  # get genre by id
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

        return status.HTTP_200_OK # Response({'deleted': True})


@api_view(['GET', 'POST'])
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
def user_detail(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        # user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # user = User.objects.get(id=user_id)
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        # user = User.objects.get(id=user_id)

        user.delete()

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        return Response({'deleted': True})
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        return status.HTTP_200_OK


>>>>>>> Stashed changes
