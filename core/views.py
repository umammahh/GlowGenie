from django.shortcuts import render
from core.models import User
from core.serializer import (
    MyTokenObtainPairSerializer, 
    UserSerializer, 
    RegisterSerializer, 
    UserUpdateSerializer,
)

from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# Register a new user
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        return Response({'message': 'Hello, world from GET!'}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        return Response({'message': 'Hello, world from POST!'}, status=status.HTTP_201_CREATED)


class UserUpdateView(generics.UpdateAPIView):
    serializer_class = UserUpdateSerializer
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    lookup_field = 'id'
    http_method_names = ['put']  # Only allow PUT method

    def get_object(self):
        user_id = self.kwargs.get('id')
        if user_id and str(self.request.user.id) == str(user_id):
            return self.request.user
        raise PermissionDenied("You can only update your own profile")


class UserDeleteView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    lookup_field = 'id'

    def get_object(self):
        user_id = self.kwargs.get('id')
        if user_id and str(self.request.user.id) == str(user_id):
            return self.request.user
        raise PermissionDenied("You can only delete your own account")
