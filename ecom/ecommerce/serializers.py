from rest_framework import serializers
from ecommerce import models

class RetailerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Retailer
        fields = ['id','user','address']

    def __init__(self,*args,**kwargs):
        super(RetailerSerializer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1

class RetailerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Retailer
        fields = ['id','user','address']
    
    def __init__(self,*args,**kwargs):
        super(RetailerDetailSerializer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1


class ProductListSerializer(serializers.ModelSerializer):
    productreview = serializers.StringRelatedField(many=True,read_only = True)

    class Meta:
        model = models.Product
        fields = ['id','category','retailer','title','detail','price','productreview']
    
    def __init__(self,*args,**kwargs):
        super(ProductListSerializer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1 

class ProductDetailSerializer(serializers.ModelSerializer):
    productreview = serializers.StringRelatedField(many=True,read_only = True)
    class Meta:
        model = models.Product
        fields = ['id','category','retailer','title','detail','price','productreview']
    
    def __init__(self,*args,**kwargs):
        super(ProductDetailSerializer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1 


#Customer Serializer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','contact']

    def __init__(self,*args,**kwargs):
        super(CustomerSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','contact']
    
    def __init__(self,*args,**kwargs):
        super(CustomerDetailSerializer,self).__init__(*args,**kwargs)


#Order Serializers
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id','customer']

    def __init__(self,*args,**kwargs):
        super(OrderSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1


class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order','product']

    def __init__(self,*args,**kwargs):
        super(OrderDetailSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1



class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id','customer','address','default_address']

    def __init__(self,*args,**kwargs):
        super(CustomerAddressSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1


class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductReview
        fields = ['id','customer','product','review','ratings','add_time']

    def __init__(self,*args,**kwargs):
        super(ProductReviewSerializer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title','detail']

    def __init__(self,*args,**kwargs):
        super(CategorySerializer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title','detail']
    
    def __init__(self,*args,**kwargs):
        super(CategoryDetailSerializer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1