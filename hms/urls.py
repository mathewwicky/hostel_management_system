from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from hostel import views as hostel_views
from booking import views as booking_views
from users.views import CustomUserViewSet



router = routers.DefaultRouter()
router.register(r'hostels', hostel_views.HostelView, 'hostels')
router.register(r'bookings', booking_views.BookingView, 'booking') 
router.register(r'custom-users', CustomUserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]
