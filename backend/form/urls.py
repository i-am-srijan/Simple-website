# urls.py
from django.urls import path
from .views import create_message

urlpatterns = [
    path('api/contact/', create_message),
]