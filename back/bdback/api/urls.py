from django.urls import path

from .views import GenreListAPIView, GenreDetailAPIView


urlpatterns = [
    path('genres/', GenreListAPIView.as_view()),
    path('genres/<int:pk>/', GenreDetailAPIView.as_view()),

]