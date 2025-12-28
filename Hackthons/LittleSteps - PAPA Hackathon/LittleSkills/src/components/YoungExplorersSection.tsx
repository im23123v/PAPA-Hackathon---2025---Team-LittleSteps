import SkillCard from "@/components/SkillCard";
import SkillDetailModal, { SkillDetailData } from "@/components/SkillDetailModal";
import { youngExplorerSkillsData } from "@/data/youngExplorerSkills";
import { useState } from "react";

const YoungExplorersSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetailData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill: SkillDetailData) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <section id="young-explorers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 rounded-full mb-4">
            <span className="text-2xl">🌟</span>
            <span className="text-sm font-medium text-coral">Ages 5-9</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-fredoka mb-4">
            Young Explorers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Foundation skills for curious young minds. Click any skill card to explore 
            detailed learning paths and watch related videos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youngExplorerSkillsData.map((skill, index) => (
            <SkillCard 
              key={skill.title} 
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              colorClass={skill.colorClass}
              lightColorClass={skill.lightColorClass}
              skills={skill.skills}
              delay={index * 100}
              onClick={() => handleSkillClick(skill)}
            />
          ))}
        </div>
      </div>

      <SkillDetailModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default YoungExplorersSection;
