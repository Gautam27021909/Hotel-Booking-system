from django.shortcuts import render , redirect
from .models import Sign_up
from django.contrib import messages

def index(request):
    return render( request,"index.html")

def error(request):
    return render(request, "404_error.html")

def about(request):
    return render(request,"about.html")

def service(request):
    return render(request, "services.html")

def contact(request):
    return render(request, "contact.html")

def tc(request):
    return render(request,"tc.html")

def room(request):
    return render(request,"rooms.html")

def login(request):
    if request.method=="POST":
        try:
            user=Sign_up.objects.get(
                username=request.POST['username'],
                password=request.POST['password'],
            )
            request.session['email']=user.email
            request.session['username']=user.username
            return render(request,'index.html')
        except:
            return render(request,'login.html')
    else:
        return render(request,'login.html')

def signup(request):
    if request.method == "POST":
        name = request.POST["name"]
        Phone_Number = request.POST["Phone_Number"]        
        email = request.POST["email"]
        password = request.POST["password"]
        confirm_password = request.POST["confirm_password"]
        username = request.POST["username"]
        
        if Sign_up.objects.filter(username=username).exists():
            messages.error(request,"Username is taken")
            return redirect("signup")
        if password != confirm_password:
            messages.error(request,"Password does not match")
            return redirect("signup")
        
        Data = Sign_up(name=name,Phone_Number=Phone_Number,email=email,password=password,confirm_password=confirm_password,username=username)
        Data.save()
    return render(request,"sign_up.html")
        
def forgot(request):
    return render(request,"forgot.html")

def setpassword(request):
    return render(request,"set_password.html")