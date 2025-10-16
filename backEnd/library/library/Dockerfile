# Stage 1: Build the application
# =============================
FROM maven:3.9.11-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy only the files needed for dependency resolution first
COPY pom.xml mvnw ./
COPY .mvn .mvn

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy the source code
COPY src ./src

# Package the application
RUN ./mvnw clean package -DskipTests

# =============================
# Stage 2: Run the application
# =============================
FROM eclipse-temurin:21-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the application port
EXPOSE 8081

# Pass environment variables (like Mongo URI) at runtime
ENV MONGODB_URI=mongodb://localhost:27017/Library_User

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
