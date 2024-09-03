from .models import Client
from .serializer import ClientSerializer
from rest_framework import viewsets

# Create your views here.
class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer