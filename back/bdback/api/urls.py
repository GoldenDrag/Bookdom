from django.urls import path
from .views import GenreListAPIView, GenreDetailAPIView, user_list, user_detail

from . import views

urlpatterns = [
<<<<<<< Updated upstream
=======

    path('login/', obtain_jwt_token),

>>>>>>> Stashed changes
    path('genres/', GenreListAPIView.as_view()),
    path('genres/<int:genre_id>/', GenreDetailAPIView.as_view()),

    path('users/', views.user_list),
    path('users/<int:user_id>/', views.user_detail),
]