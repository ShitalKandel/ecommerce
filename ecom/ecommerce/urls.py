from django.urls import path
from ecommerce import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('address',views.CustomerAddressViewSet)
router.register('productreview',views.ProductRatingsReviewViewSet)

urlpatterns = [
    path('retailers/',views.RetailerList.as_view()),
    path('retailer/<int:pk>/',views.RetailerDetail.as_view()),
    path('products/',views.ProductList.as_view()),
    path('product/<int:pk>/',views.ProductDetail.as_view()),
    path('customers/',views.CustomerList.as_view()),
    path('customer/<int:pk>/',views.CustomerDetail.as_view()), 
    path('orders/',views.OrderList.as_view()),
    path('order/<int:pk>/',views.OrderDetail.as_view()),
]       

urlpatterns += router.urls