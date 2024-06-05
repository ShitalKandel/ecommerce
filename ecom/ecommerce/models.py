from django.db import models
from django.contrib.auth.models import User

# Create your models here.



#Retailer 
class Retailer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self) -> str:
        return self.user.username


#Product Category
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    detail=models.CharField(null=True)

    def __str__(self) -> str:
        return self.title
    

#Product Details
class Product(models.Model):
    category = models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,related_name='product_in_category')
    retailer = models.ForeignKey(Retailer,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=200)
    detail=models.CharField(null=True)
    price = models.FloatField()

    def __str__(self) -> str:
        return self.title
    
#Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    contact = models.PositiveBigIntegerField()

    def __str__(self) -> str:
        return self.user.username
    
#Order 
class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)



#Order Items
class OrderItems(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE,related_name='order_items')
    product = models.ForeignKey(Product,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.product.title