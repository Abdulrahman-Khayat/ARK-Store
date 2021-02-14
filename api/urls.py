from django.contrib import admin
from django.urls import path
from rest_framework import routers
from .api import ProjectInfoViewSet

# urlpatterns = [
#     path('api/api', ProjectInfoViewSet.as_view() ),
# ]