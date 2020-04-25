from django.urls import path

from .views import GenreListAPIView, GenreDetailAPIView

from . import views

urlpatterns = [
    path('genres/', GenreListAPIView.as_view()),
    path('genres/<int:genre_id>/', GenreDetailAPIView.as_view()),

    path('users/', views.user_list),
    path('users/<int:user_id>/', views.user_detail),




]