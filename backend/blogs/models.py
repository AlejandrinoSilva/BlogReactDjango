from django.db import models

# Create your models here.
class Blog(models.Model):
    title     = models.CharField(max_length=120)
    contenido = models.TextField()
    fecha     = models.DateTimeField(auto_now_add=True)
    # imagen    = models.ImageField()