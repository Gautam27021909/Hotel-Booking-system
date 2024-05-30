from django.contrib import admin
from .models import Sign_up , contactus

class register(admin.ModelAdmin):
    list_display= ("name","Phone_Number", "email","password","username")

class Contact_detail(admin.ModelAdmin):
    list_display= ("name","Phone", "email","message")
    
admin.site.register(Sign_up, register)

admin.site.register(contactus,Contact_detail)