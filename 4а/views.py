from django.shortcuts import render
from django.views import View
from .models import Client

class Index(View):
    def get(self, request):
        clients = Client.objects.all()
        print(clients)
        return render(request, 'profileapp/index.html', {'clients': clients})