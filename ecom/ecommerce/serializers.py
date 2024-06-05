from rest_framework import serializers
from ecommerce import models

class RetailerSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Retailer
        fields = ['id','user','address']

    def __init__(self,*args,**kwargs):
        super(RetailerSerialzer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1

class RetailerDetailSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Retailer
        fields = ['id','user','address']
    
    def __init__(self,*args,**kwargs):
        super(RetailerDetailSerialzer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1


class ProductListSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id','category','retailer','title','detail','price']
    
    def __init__(self,*args,**kwargs):
        super(ProductListSerialzer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1 

class ProductDetailSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id','category','retailer','title','detail','price']
    
    def __init__(self,*args,**kwargs):
        super(ProductDetailSerialzer,self).__init__(*args,**kwargs)
        # self.Meta.depth = 1 


#Customer Serializer
class CustomerSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','contact']

    def __init__(self,*args,**kwargs):
        super(CustomerSerialzer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1

class CustomerDetailSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','contact']
    
    def __init__(self,*args,**kwargs):
        super(CustomerDetailSerialzer,self).__init__(*args,**kwargs)


#Order Serializers
class OrderSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id','customer']

    def __init__(self,*args,**kwargs):
        super(OrderSerialzer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1


class OrderDetailSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order','product']

    def __init__(self,*args,**kwargs):
        super(OrderDetailSerialzer,self).__init__(*args,**kwargs)
        self.Meta.depth = 1