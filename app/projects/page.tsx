import { Metadata } from 'next';
import { allProjects, projectsPageData } from '@/data/projects';
import { ProjectGrid } from '@/components/project-grid';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Projects | Bryan Thompson - AI Innovation Portfolio',
  description: 'Explore our collection of AI-powered solutions designed to solve real-world problems and democratize access to advanced technology.',
};

export default function ProjectsPage() {
  const categories = projectsPageData.categories;
  
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
          {projectsPageData.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          {projectsPageData.hero.subtitle}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {projectsPageData.hero.description}
        </p>
      </div>
      
      {/* Projects Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all">
          <ProjectGrid projects={allProjects} />
        </TabsContent>
        
        {categories.map((category) => {
          const categoryProjects = allProjects.filter(p => p.category === category.value);
          return (
            <TabsContent key={category.value} value={category.value}>
              {categoryProjects.length > 0 ? (
                <ProjectGrid projects={categoryProjects} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No projects in this category yet. Check back soon!
                  </p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
