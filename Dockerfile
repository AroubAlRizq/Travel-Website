# Use official PHP image
FROM php:8.2-cli

# Set working directory
WORKDIR /var/www/html

# Copy all project files into the container
COPY . .

# Expose the Render port
EXPOSE 10000

# Start PHP server on required host and port
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
