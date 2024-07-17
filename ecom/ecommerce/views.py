from rest_framework import generics,viewsets, pagination
from ecommerce import serializers
from ecommerce import models

class RetailerList(generics.ListCreateAPIView):
    queryset = models.Retailer.objects.all()
    serializer_class = serializers.RetailerSerializer

class RetailerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Retailer.objects.all()
    serializer_class = serializers.RetailerDetailSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs =  super().get_queryset()
        category_id = self.request.GET.get('category')
        if category_id:
            category = models.ProductCategory.objects.get(id=category_id)
            qs = qs.filter(category=category)
        
        return qs
    

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer


#Customer Views

class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer


class OrderDetail(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter(order=order)
        return order_items
    

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = models.CustomerAddress.objects.all()

class ProductRatingsReviewViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductReviewSerializer
    queryset = models.ProductReview.objects.all()

#Category 
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer