
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { File, ChevronRight } from 'lucide-react';

const Tutorials = () => {
  const tutorials = [
    {
      id: "kubernetes-basics",
      title: "Kubernetes Basics: From Zero to Hero",
      level: "Beginner",
      duration: "3 hours",
      description: "Learn the fundamentals of Kubernetes, including pods, deployments, services, and more.",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
    },
    {
      id: "terraform-aws",
      title: "Infrastructure as Code with Terraform on AWS",
      level: "Intermediate",
      duration: "4 hours",
      description: "Master infrastructure as code using Terraform to provision and manage AWS resources.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "docker-compose",
      title: "Multi-Container Applications with Docker Compose",
      level: "Beginner",
      duration: "2 hours",
      description: "Learn how to define and run multi-container Docker applications with Docker Compose.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: "jenkins-pipeline",
      title: "Building CI/CD Pipelines with Jenkins",
      level: "Intermediate",
      duration: "3.5 hours",
      description: "Create robust continuous integration and delivery pipelines using Jenkins and Pipeline as Code.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
    },
    {
      id: "gitops-argocd",
      title: "GitOps with ArgoCD and Kubernetes",
      level: "Advanced",
      duration: "4 hours",
      description: "Implement GitOps workflows using ArgoCD for declarative Kubernetes application deployment.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      id: "prometheus-grafana",
      title: "Monitoring with Prometheus and Grafana",
      level: "Intermediate",
      duration: "3 hours",
      description: "Set up comprehensive monitoring and alerting for your applications and infrastructure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero 
          title="DevOps Tutorials" 
          subtitle="Step-by-step guides to help you master essential DevOps tools and practices."
        />
        
        {/* Tutorials Grid */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div 
                  key={tutorial.id}
                  className={`bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 animate-scale-in opacity-0 stagger-${Math.min(index % 3 + 1, 3)}`}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tutorial.level}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <File size={14} className="mr-1" />
                        {tutorial.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {tutorial.description}
                    </p>
                    
                    <Button variant="outline" className="w-full flex justify-between items-center">
                      <span>Start Tutorial</span>
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tutorials;
