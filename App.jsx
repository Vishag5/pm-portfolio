import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Home, User, FileText, MessageSquare, Mail, Play, FileDown, ExternalLink } from 'lucide-react'
import './App.css'

// Import assets
import surveySnapsImage from './assets/Surveysnaps.JPG'
import nobrokerPdf from './assets/Assignment2ProductDiscovery_Market_Userresearch.pdf'
import nobrokerLogo from './assets/Nobrokerlogo.JPG'
import problemStatement from './assets/Problemstatement.JPG'
import profilePhoto from './assets/profile_photo.jpeg'
import spotifyImage from './assets/spotifyimage.JPG'
import spotifyPdf from './assets/SpotifyPrioritization_Vishag.pdf'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Load Senja scripts for video testimonials
    const loadSenjaScript = (widgetId) => {
      const script = document.createElement('script')
      script.src = `https://widget.senja.io/widget/${widgetId}/platform.js`
      script.type = 'text/javascript'
      script.async = true
      document.head.appendChild(script)
    }

    // Load both Senja widgets
    loadSenjaScript('e3f98fdb-7866-4e15-accb-05065e24ea22')
    loadSenjaScript('a9547747-98b3-455d-ae0d-5beea8672ac5')
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePdfView = (pdfPath) => {
    window.open(pdfPath, '_blank')
  }

  const handleVideoWatch = (videoType) => {
    if (videoType === 'spotify') {
      window.open('https://drive.google.com/file/d/18FyxSxTEapuNymnqSkSvK8E6yCKcDAMj/view?usp=sharing', '_blank')
    } else if (videoType === 'meesho') {
      window.open('https://drive.google.com/file/d/1GSYgiumGmZwNFth1TKT5hgJ71mAsxgPG/view?usp=sharing', '_blank')
    } else if (videoType === 'nobroker') {
      window.open('https://drive.google.com/file/d/122FGK7V07yzf_K31Np0esEJE5kIJxzRI/view?usp=drive_link', '_blank')
    }
  }

  const handleSurveyView = (surveyType) => {
    if (surveyType === 'spotify') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSd_D2tnIyXOZYcYiMl2tOLaPbOpppdVBPXw53MeFMdFZY4Vgg/viewform', '_blank')
    } else if (surveyType === 'nobroker') {
      window.open('https://klever.kraftful.com/surveys-public/untitled-survey-kaj5jpzg', '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Vishag Thacharakkal</h1>
            <div className="flex space-x-6">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'} 
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-2"
              >
                <Home size={16} />
                Home
              </Button>
              <Button 
                variant={activeSection === 'case-studies' ? 'default' : 'ghost'} 
                onClick={() => scrollToSection('case-studies')}
                className="flex items-center gap-2"
              >
                <FileText size={16} />
                Case Studies
              </Button>
              <Button 
                variant={activeSection === 'testimonials' ? 'default' : 'ghost'} 
                onClick={() => scrollToSection('testimonials')}
                className="flex items-center gap-2"
              >
                <MessageSquare size={16} />
                Testimonials
              </Button>
              <Button 
                variant={activeSection === 'about' ? 'default' : 'ghost'} 
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2"
              >
                <User size={16} />
                About
              </Button>
              <Button 
                variant={activeSection === 'contact' ? 'default' : 'ghost'} 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2"
              >
                <Mail size={16} />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Product Manager
                <br />
                <span className="text-blue-600">& Strategist</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Aspiring Product Manager with a passion for creating user-centered solutions and driving product innovation. 
                Experienced in analytics, user research, and strategic product thinking.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('case-studies')} size="lg">
                  View My Work
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')} size="lg">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Vishag Thacharakkal" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Management Case Studies</h2>
            <p className="text-xl text-gray-600">
              Detailed case studies showcasing my approach to product challenges, problem-solving, and strategic thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Spotify Case Study - First */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mb-4 border">
                  <img src={spotifyImage} alt="Spotify Logo" className="w-16 h-auto" />
                </div>
                <CardTitle className="text-xl">Problem Framing & Prioritization - Spotify</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  User Research | Problem Framing | RICE Framework | Product Strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Analyzed how to increase Spotify Premium sign-ups by identifying key motivations and barriers for freemium users. 
                  Conducted user research, competitive analysis, and developed actionable insights using RICE prioritization framework.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Problem Framing</Badge>
                  <Badge variant="secondary">RICE Framework</Badge>
                  <Badge variant="secondary">Competitive Analysis</Badge>
                  <Badge variant="secondary">Product Strategy</Badge>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Button 
                    className="flex items-center gap-2"
                    onClick={() => handleVideoWatch('spotify')}
                  >
                    <Play size={16} />
                    Watch Video
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handlePdfView(spotifyPdf)}
                  >
                    <FileDown size={16} />
                    View PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleSurveyView('spotify')}
                  >
                    <ExternalLink size={16} />
                    Survey Form
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meesho Case Study - Second */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="text-orange-600" size={40} />
                </div>
                <CardTitle className="text-xl">Improving Repeat Purchase Frequency at Meesho</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  Applied Product Thinking Frameworks | User Validation | JTBD | First-Principle Thinking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  I analyzed low repeat purchase rates at Meesho and proposed solutions using Product Thinking, JTBD, and 
                  First-Principle frameworks to improve customer retention and engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Product Thinking</Badge>
                  <Badge variant="secondary">User Validation</Badge>
                  <Badge variant="secondary">JTBD</Badge>
                  <Badge variant="secondary">First-Principle Thinking</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="flex items-center gap-2"
                    onClick={() => handleVideoWatch('meesho')}
                  >
                    <Play size={16} />
                    Watch Video
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                  >
                    <FileDown size={16} />
                    View PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* NoBroker Case Study - Third */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4 border">
                  <img src={nobrokerLogo} alt="NoBroker Logo" className="w-16 h-auto" />
                </div>
                <CardTitle className="text-xl">Product Discovery, Market & User Research - NoBroker</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  Market Research | User Interviews | Competitive Analysis | Product Strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Comprehensive market and user research for NoBroker's service expansion, including competitor analysis, 
                  user interviews, and strategic recommendations for improving service discovery and retention.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Market Research</Badge>
                  <Badge variant="secondary">User Interviews</Badge>
                  <Badge variant="secondary">Competitive Analysis</Badge>
                  <Badge variant="secondary">Product Strategy</Badge>
                  <Badge variant="secondary">Service Design</Badge>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Button 
                    className="flex items-center gap-2"
                    onClick={() => handleVideoWatch('nobroker')}
                  >
                    <Play size={16} />
                    Watch Video
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handlePdfView(nobrokerPdf)}
                  >
                    <FileDown size={16} />
                    View PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleSurveyView('nobroker')}
                  >
                    <ExternalLink size={16} />
                    Survey Form
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Additional Resources:</p>
                  <div className="flex gap-2 flex-wrap">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(surveySnapsImage, '_blank')}
                      className="text-xs"
                    >
                      Survey Snapshots
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(problemStatement, '_blank')}
                      className="text-xs"
                    >
                      Problem Statement
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">
              Hear what industry leaders say about my product management work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Product Leader Testimonial */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Testimonial by Google Product Leader</h3>
              <div 
                className="senja-embed" 
                data-id="e3f98fdb-7866-4e15-accb-05065e24ea22" 
                data-mode="shadow" 
                data-lazyload="false" 
                style={{display: 'block', width: '100%'}}
              ></div>
            </div>

            {/* Ex-Indiamart PM Testimonial */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Testimonial by Ex-Indiamart PM</h3>
              <div 
                className="senja-embed" 
                data-id="a9547747-98b3-455d-ae0d-5beea8672ac5" 
                data-mode="shadow" 
                data-lazyload="false" 
                style={{display: 'block', width: '100%'}}
              ></div>
            </div>
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">
              Feedback from peers and mentors on my product management work and approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex text-yellow-400 mb-2">
                  {'★'.repeat(5)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "The sequence and highlights were useful and engaging. The funnel section provided valuable insights."
                </p>
                <div>
                  <p className="font-semibold">Animesh Prasad</p>
                  <p className="text-sm text-gray-500">Analytics and Metrics</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex text-yellow-400 mb-2">
                  {'★'.repeat(5)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "Your project exceeded expectations. Outstanding presentation and well-thought-out analysis."
                </p>
                <div>
                  <p className="font-semibold">Ashutosh Patnaik</p>
                  <p className="text-sm text-gray-500">Problem Framing & Prioritization</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex text-yellow-400 mb-2">
                  {'★'.repeat(5)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "Great job on the project! I really liked how your team grounded the ideas in user research and structured the insights clearly."
                </p>
                <div>
                  <p className="font-semibold">Varshini A S</p>
                  <p className="text-sm text-gray-500">Problem Framing & Prioritization</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex text-yellow-400 mb-2">
                  {'★'.repeat(5)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "Really liked the user research and interview section—insightful and well-structured!"
                </p>
                <div>
                  <p className="font-semibold">Kaushal Jain</p>
                  <p className="text-sm text-gray-500">Product Discovery & Market Research</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex text-yellow-400 mb-2">
                  {'★'.repeat(5)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "Loved the user flow low fidelity designs. Overall approach to attempt and synchronisation is great."
                </p>
                <div>
                  <p className="font-semibold">Vijay Sehgal</p>
                  <p className="text-sm text-gray-500">Effective Communication</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex text-yellow-400 mb-2">
                  {'★'.repeat(5)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "Market validation and business impact bifurcation in why the problem is worth solving success, and your way of defining the success metrics were the ones for me."
                </p>
                <div>
                  <p className="font-semibold">Deeksha Aashri</p>
                  <p className="text-sm text-gray-500">Effective Communication</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm an aspiring Product Manager with a strong foundation in analytics, user research, and strategic thinking. 
              My approach combines data-driven insights with user-centered design to create products that truly matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600" size={32} />
                </div>
                <CardTitle>User-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Deep understanding of user needs through research, interviews, and data analysis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-green-600" size={32} />
                </div>
                <CardTitle>Data-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Strong analytical skills with experience in metrics, KPIs, and performance tracking
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-purple-600" size={32} />
                </div>
                <CardTitle>Strategic Thinker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ability to frame problems, prioritize features, and align product strategy with business goals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in discussing product opportunities or collaboration? I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info.vishag@gmail.com" className="text-blue-600 hover:underline">
                  info.vishag@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Mobile</h3>
                <a href="tel:+917012938275" className="text-green-600 hover:underline">
                  +91 7012938275
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <ExternalLink className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/vishagt/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  vishagt
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="flex items-center gap-2 mx-auto">
            <Mail size={20} />
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  )
}

export default App

