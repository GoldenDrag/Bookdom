from django.urls import path
from .views import GenreListAPIView, GenreDetailAPIView, user_list, user_detail


urlpatterns = [
    path('genres/', GenreListAPIView.as_view()),
    path('genres/<int:genre_id>/', GenreDetailAPIView.as_view()),
    path('users/', user_list, name='users list'),
    path('users/<int:user_id/', user_detail, name='user details')
]