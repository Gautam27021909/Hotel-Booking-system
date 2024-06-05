from django.db import models

class Sign_up(models.Model):
    name = models.CharField(max_length=100)
    Phone_Number = models.IntegerField(default="")
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)
    username = models.CharField(max_length=100, default="")
    
class contactus(models.Model):
    name = models.CharField(max_length=100)
    Phone = models.IntegerField(default="")
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=100, default="")

class newsletters(models.Model):
    EmailADD = models.EmailField(max_length=100)
    
# class All_hotel(models.Model):
#     photo = models.ImageField(max_length=100)
#     location = models.CharField()
#     room = models.CharField()
    

    