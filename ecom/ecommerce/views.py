from rest_framework import generics,viewsets
from ecommerce import serializers
from ecommerce import models

class RetailerList(generics.ListCreateAPIView):
    queryset = models.Retailer.objects.all()
    serializer_class = serializers.RetailerSerialzer

class RetailerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Retailer.objects.all()
    serializer_class = serializers.RetailerDetailSerialzer

class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerialzer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerialzer


#Customer Views

class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerialzer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerialzer


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerialzer


class OrderDetail(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerialzer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter(order=order)
        return order_items
    

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerialzer
    queryset = models.CustomerAddress.objects.all()

class ProductRatingsReviewViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductReviewSerialzer
    queryset = models.ProductReview.objects.all()

#Category 
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerialzer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerialzer