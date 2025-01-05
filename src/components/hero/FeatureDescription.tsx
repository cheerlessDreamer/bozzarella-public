import { useLanguage } from "@/contexts/LanguageContext";

type FeatureDescriptionProps = {
  hoveredFeature: number | null;
  features: Array<{ description: string }>;
};

export const FeatureDescription = ({ hoveredFeature, features }: FeatureDescriptionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="h-24 transition-all duration-300">
      {hoveredFeature !== null ? (
        <p className="text-gray-400 animate-fade-up">
          {features[hoveredFeature].description}
        </p>
      ) : (
        <p className="text-gray-400 animate-fade-up">
          {t("hero.hoverText")}
        </p>
      )}
    </div>
  );
};