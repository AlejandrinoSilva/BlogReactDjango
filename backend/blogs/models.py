from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Blog(models.Model):
    title     = models.CharField(max_length=120)
    contenido = models.TextField()
    owner = models.ForeignKey(User, related_name="blogs", on_delete=models.CASCADE, null=True)
    fecha     = models.DateTimeField(auto_now_add=True)
    # imagen    = models.ImageField()
