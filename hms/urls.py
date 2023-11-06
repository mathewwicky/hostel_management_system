from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from hostel import views as hostel_views

router = routers.DefaultRouter()
router.register(r'hostels', hostel_views.HostelView, 'hostels') 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
