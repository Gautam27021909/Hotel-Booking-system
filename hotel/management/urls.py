from django.contrib import admin
from django.urls import path
from management import views

urlpatterns = [
    path('', views.index, name="index"),
    path("error/",views.error, name="error"),
    path("about/", views.about, name= "about"),
    path("service/", views.service, name= "service"),
    path("contact/", views.contact, name= "contact"),
]