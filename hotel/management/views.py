from django.shortcuts import render , redirect
from .models import Sign_up , contactus , newsletters
from django.contrib import messages

def index(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render( request,"index.html")

def error(request):
    return render(request, "404_error.html")

def about(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render(request,"about.html")

def service(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render(request, "services.html")

def contact(request):
    if request.method == "POST":
        try:
            EmailADD = request.POST["EmailADD"]
            z = newsletters(EmailADD=EmailADD)
            z.save()
        except:
            name = request.POST['name']
            Phone = request.POST['Phone']
            email = request.POST['email']
            message= request.POST['message'] 
            z = contactus(name=name,Phone=Phone,email=email,message=message)
            z.save()
   
    return render(request, "contact.html")

def tc(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render(request,"tc.html")

def room(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
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

def roomdetails(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render(request,"room_details.html")

def booking(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render(request,"booking.html")

def payment(request):
    if request.method == "POST":
        EmailADD = request.POST["EmailADD"]
        y = newsletters(EmailADD=EmailADD)
        y.save()
    return render(request,"payment.html")

def thanku(request):
    return render(request,"thanku.html")

def More_hotels(request):
    return render(request, "more_hotels.html")