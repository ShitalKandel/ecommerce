from django.urls import path
from ecommerce import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('address',views.CustomerAddressViewSet)
router.register('productreview',views.ProductRatingsReviewViewSet)

urlpatterns = [
    #Retailer
    path('retailers/',views.RetailerList.as_view()),
    path('retailer/<int:pk>/',views.RetailerDetail.as_view()),
    #Products
    path('products/',views.ProductList.as_view()),
    path('product/<int:pk>/',views.ProductDetail.as_view()),
    #Product Categorys
    path('categories/',views.CategoryList.as_view()),
    path('category/<int:pk>/',views.CategoryDetail.as_view()),
    #Customer
    path('customers/',views.CustomerList.as_view()),
    path('customer/<int:pk>/',views.CustomerDetail.as_view()),
    #Order 
    path('orders/',views.OrderList.as_view()),
    path('order/<int:pk>/',views.OrderDetail.as_view()),
]       

urlpatterns += router.urls