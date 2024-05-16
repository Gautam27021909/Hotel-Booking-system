from django.db import models

class Sign_up(models.Model):
    name = models.CharField(max_length=100)
    Phone_Number = models.IntegerField(default="")
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)