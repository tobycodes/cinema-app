provider "aws" {
  region = "eu-central-1"
}

terraform {
  backend "s3" {
    bucket  = "toby-cinema-app-tf-state"
    key     = "cinema-app.tfstate"
    region  = "eu-central-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"

  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "David Olubusoye"
  }
}