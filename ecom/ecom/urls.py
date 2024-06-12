"""
URL configuration for ecom project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

   http post http://127.0.0.1:8000/api/token/ username=shital password=1234

    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzY1NzY1OSwiaWF0IjoxNzE3NTcxMjU5LCJqdGkiOiJlYzQ2M2M2NmRmNzM0ZDgzODA4MWJhNDBmMjBjMmRkYSIsInVzZXJfaWQiOjF9.TWhtHncCioTge60tAlSwkJdXz1MOkwUh7kwz4w8Smlg",

    http://127.0.0.1:8000/api/retailers/
    "Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NTcxNTU5LCJpYXQiOjE3MTc1NzEyNTksImp0aSI6Ijg2ZjZkN2FjYTMyNjRiZTk4ZDBhOGI0YzBmNTg3ZTk1IiwidXNlcl9pZCI6MX0.LnxkBPdzbegaayyEBC4wDLcTKhFX7XQhjvIBEykF6Uo"

    http://127.0.0.1:8000/api/token/refresh/
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('ecommerce.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]
