from django.db import models

class test(models.Model):
    
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200)
    

class Categories(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()

    def __str__(self):
        return'{} {}'.format(self.name, self.description)

    class Meta:
        verbose_name_plural = 'Categories'

class Status(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()

    def __str__(self):
        return'{} {}'.format(self.name, self.description)

    class Meta:
        verbose_name_plural = 'Status'


class Brands(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()

    def __str__(self):
        return'{}'.format(self.name)

    class Meta:
        verbose_name_plural = 'Brands'

class Products(models.Model): 
    name = models.CharField(max_length=200, unique=True)
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    status_id = models.ForeignKey(Status, on_delete=models.PROTECT)
    quantity = models.PositiveSmallIntegerField() 
    brand_id = models.ForeignKey(Brands, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} {} {} {} {} {} {} {}'.format(self.name, self.category_id, self.price, self.description, self.status_id,
         self.quantity, self.brand_id, self.date_added)
    class Meta:
        verbose_name_plural = 'Products'