from . import views
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path


urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('user/<int:id>/update/', views.UserUpdateView.as_view(), name='user-update'),
    path('user/<int:id>/delete/', views.UserDeleteView.as_view(), name='user-delete'),
]
