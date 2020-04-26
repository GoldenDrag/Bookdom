from django.urls import path
# from .views import GenreListAPIView, GenreDetailAPIView, user_list, user_detail

from .views import *

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [

    path('login/', obtain_jwt_token),

    path('genres/', GenreListAPIView.as_view()),
    path('genres/<int:genre_id>/', GenreDetailAPIView.as_view()),

    path('users/', user_list),
    path('users/<int:user_id>/', user_detail),

    path('books/', get_books),
    path('books/<int:book_id>/', BookAPIView),

]