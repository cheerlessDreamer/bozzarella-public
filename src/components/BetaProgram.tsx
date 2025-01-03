import { Button } from "@/components/ui/button";

export const BetaProgram = () => {
  const handleJoinBeta = () => {
    window.open("https://form.typeform.com/to/placeholder", "_blank");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Beta Program</h2>
          <p className="text-gray-400 mb-8">
            Be among the first to experience Bozzarella and help shape the future of restaurant order management. Beta users get lifetime free access.
          </p>
          <Button 
            onClick={handleJoinBeta}
            className="bg-primary hover:bg-primary-hover text-white"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};