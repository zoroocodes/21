"use client";

import { motion, useMotionValue, useTransform, animate, useAnimate, stagger } from "framer-motion";
import { Shield, Brain, TrendingUp, Star, ArrowRight, CheckCircle, Zap, Users, Target, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";



// Text Generate Effect Component
const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
        const spanProps: HTMLMotionProps<"span"> = {
          key: word + idx,
          className: "text-white opacity-0",
          style: { filter: filter ? "blur(10px)" : "none" },
        };
  
        return <motion.span {...spanProps}>{word}{" "}</motion.span>;
      })}
    </motion.div>
  );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

// Elegant Shape Component
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// NYC Skyline Component
function NYCSkyline() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark gradient overlay to blend with the black background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      {/* Blue tint overlay for night effect */}
      <div className="absolute inset-0 bg-blue-900/10" />
    </div>
  );
}

// Hero Section
function ReputationHero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />
      
      {/* NYC Skyline Background */}
      <NYCSkyline />

      

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Shield className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-white/80 tracking-wide font-medium">
              AI-Powered Reputation Management
            </span>
          </motion.div>

                    <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
                                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Dominate
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
                Search Results
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
                        <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
              Control what people see when they search your name. AI-powered SEO strategies 
              to suppress negative content and boost positive search results.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:border-white/40 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-8"
          >
            {/* Risk-Free Guarantee */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Elite Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10M+</div>
                <div className="text-sm text-white/60">Mentions Tracked</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/60">Success Rate</div>
              </div>
            </div>

            {/* Urgency/Scarcity */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-sm font-medium">
                Limited spots available for new clients this month
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Sentiment Analysis",
      description: "Advanced machine learning algorithms analyze sentiment across all platforms in real-time."
    },
    {
      icon: Shield,
      title: "Negative Result Suppression",
      description: "Strategically suppress negative search results with our proprietary SEO techniques."
    },
    {
      icon: Zap,
      title: "Auto-Generated Responses",
      description: "AI-crafted responses that maintain your brand voice while addressing concerns professionally."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Monitoring",
      description: "24/7 monitoring across social media, review sites, and search engines."
    },
    {
      icon: Users,
      title: "Multi-Platform Management",
      description: "Manage your reputation across Google, Yelp, Facebook, Twitter, and 50+ platforms."
    },
    {
      icon: Target,
      title: "Strategic Insights",
      description: "Data-driven insights and recommendations to improve your online reputation."
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Features
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Dominate Online
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Built for founders, agencies, and influencers who demand excellence in their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/60 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Social Proof Section
function SocialProof() {
  const stats = [
    { number: "10M+", label: "Mentions Monitored" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            Trusted Worldwide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Numbers Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {["TechCrunch", "Forbes", "Wired", "Fast Company", "Inc.", "Entrepreneur"].map((brand, index) => (
            <div key={index} className="text-white/40 text-xl font-semibold">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Prestigious Clients Section
function PrestigiousClients() {
  const clientCategories = [
    {
      title: "A-List Celebrities",
      clients: ["Oscar Winner", "Grammy Artist", "Hollywood Icon", "Pop Superstar"],
      icon: Star
    },
    {
      title: "Political Leaders",
      clients: ["US Senator", "Governor", "Mayor NYC", "Ambassador"],
      icon: Shield
    },
    {
      title: "Tech Founders",
      clients: ["Unicorn CEO", "Y Combinator", "Series C Founder", "IPO Executive"],
      icon: TrendingUp
    },
    {
      title: "Fortune 500",
      clients: ["Fortune 100 CEO", "Board Member", "C-Suite Executive", "Industry Leader"],
      icon: Target
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
            Prestigious Clientele
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by the
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              {" "}Elite
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            When reputation matters most, the world's most influential people choose ReputationOne.
          </p>
          <div className="text-sm text-white/40 italic">
            *Client names confidential for privacy protection
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <category.icon className="h-12 w-12 text-yellow-400 mb-4 mx-auto" />
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.clients.map((client, clientIndex) => (
                      <div 
                        key={clientIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-white/80 text-sm">{client}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Shield className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium">
              Confidentiality Guaranteed • NDA Protected • White-Glove Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// CTA Section
function CTASection() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Get Started
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Take Control of Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Online Reputation?
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join thousands of founders, agencies, and influencers who trust ReputationOne 
            to protect and enhance their digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations", "Security"],
    Company: ["About", "Careers", "Press", "Partners", "Contact"],
    Resources: ["Blog", "Documentation", "Help Center", "Community", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Compliance"]
  };

  return (
    <footer className="bg-black border-t border-white/[0.08]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">ReputationOne</span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              AI-powered reputation management for the world's most influential people and brands.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/[0.08] mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-white/80">hello@reputationone.ai</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-white/80">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-white/80">New York, NY</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.08]">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 ReputationOne. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sticky Footer CTA Component
function StickyFooterCTA() {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    // Show sticky CTA immediately and keep it visible
    setIsVisible(true);
    
    const handleScroll = () => {
      // Keep it visible at all times
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-white/[0.08] p-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg">Ready to Transform Your Reputation?</h3>
            <p className="text-white/60 text-sm">Join elite clients who trust ReputationOne</p>
          </div>
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-6 py-2 font-semibold rounded-lg shadow-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/20 text-white hover:bg-white/10 px-6 py-2 font-semibold rounded-lg"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Landing Page Component
function ReputationOneLanding() {
  return (
    <div className="min-h-screen w-screen bg-black">
      <ReputationHero />
      <FeaturesSection />
      <SocialProof />
      <PrestigiousClients />
      <CTASection />
      <Footer />
      <StickyFooterCTA />
    </div>
  );
}

export default ReputationOneLanding;
