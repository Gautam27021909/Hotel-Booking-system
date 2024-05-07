from django.contrib import admin
from django.urls import path
from management import views

urlpatterns = [
    path('', views.index, name="index"),
    path("error/",views.error, name="error")
]