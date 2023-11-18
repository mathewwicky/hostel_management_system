from django.urls import path
from .views import CustomUserViewSet, register_user

urlpatterns = [
    path('api/users/', CustomUserViewSet.as_view({'get': 'list', 'post': 'create'}), name='user-list'),
    path('api/register/', register_user, name='register-user'),
]
