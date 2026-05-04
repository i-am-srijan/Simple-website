from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class FormAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'service_interest', 'created_at')