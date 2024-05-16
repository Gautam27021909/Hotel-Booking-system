from django.shortcuts import render , redirect

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
    return render(request,"login.html")
def signup(request):
    return render(request,"sign_up.html")
