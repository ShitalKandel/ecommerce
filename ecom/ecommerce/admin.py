from django.contrib import admin
from ecommerce import models

# Register your models here.
admin.site.register(models.Retailer)
admin.site.register(models.ProductCategory)
admin.site.register(models.Product)
admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.OrderItems)
admin.site.register(models.CustomerAddress)
admin.site.register(models.ProductReview)