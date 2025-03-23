
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, BookOpen, Video, Github, FileText } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: <BookOpen size={24} className="mb-4 text-blue-500" />,
      resources: [
        { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
        { name: "Docker Documentation", url: "https://docs.docker.com/" },
        { name: "Terraform Documentation", url: "https://www.terraform.io/docs" },
        { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" }
      ]
    },
    {
      title: "Cheat Sheets",
      icon: <FileText size={24} className="mb-4 text-blue-500" />,
      resources: [
        { name: "Kubernetes Cheat Sheet", url: "#", downloadable: true },
        { name: "Docker Commands Cheat Sheet", url: "#", downloadable: true },
        { name: "Git Commands Cheat Sheet", url: "#", downloadable: true },
        { name: "Linux Commands Cheat Sheet", url: "#", downloadable: true }
      ]
    },
    {
      title: "Example Projects",
      icon: <Github size={24} className="mb-4 text-blue-500" />,
      resources: [
        { name: "Microservices Demo", url: "https://github.com/GoogleCloudPlatform/microservices-demo" },
        { name: "Terraform AWS Examples", url: "https://github.com/terraform-aws-modules" },
        { name: "Jenkins Pipeline Examples", url: "https://github.com/jenkinsci/pipeline-examples" },
        { name: "Kubernetes Examples", url: "https://github.com/kubernetes/examples" }
      ]
    },
    {
      title: "Video Tutorials",
      icon: <Video size={24} className="mb-4 text-blue-500" />,
      resources: [
        { name: "Kubernetes Deep Dive", url: "#" },
        { name: "Docker for Beginners", url: "#" },
        { name: "Terraform Master Class", url: "#" },
        { name: "CI/CD Pipeline Fundamentals", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero 
          title="DevOps Resources" 
          subtitle="Curated collection of valuable resources to help you in your DevOps journey."
        />
        
        {/* Resources Grid */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className={`bg-white p-8 rounded-xl shadow-sm border border-border animate-scale-in opacity-0 stagger-${index + 1}`}
                >
                  <div className="text-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {category.resources.map((resource) => (
                      <li key={resource.name} className="flex items-center justify-between">
                        <span className="font-medium">{resource.name}</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="ml-2"
                          asChild
                        >
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            {resource.downloadable ? (
                              <>
                                <Download size={16} className="mr-2" />
                                Download
                              </>
                            ) : (
                              <>
                                <ExternalLink size={16} className="mr-2" />
                                View
                              </>
                            )}
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
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

export default Resources;
