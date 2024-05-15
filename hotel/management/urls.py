from django.contrib import admin
from django.urls import path
from management import views

urlpatterns = [
    path('', views.index, name="index"),
    path("error/",views.error, name="error"),
    path("about/", views.about, name= "about"),
    path("service/", views.service, name= "service"),
    path("contact/", views.contact, name= "contact"),
    path("term/", views.tc, name="tc"),
    path("room/", views.room, name="room"),
    path("login/", views.login, name="login"),
]