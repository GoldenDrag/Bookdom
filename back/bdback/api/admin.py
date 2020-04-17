from django.contrib import admin

from .models import User, Genre, Book, Comment

admin.site.register(User)
admin.site.register(Genre)
admin.site.register(Book)
admin.site.register(Comment)