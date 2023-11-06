from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from hostel import views as hostel_views
from booking import views as booking_views


router = routers.DefaultRouter()
router.register(r'hostels', hostel_views.HostelView, 'hostels')
router.register(r'bookings', booking_views.BookingView, 'booking') 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
