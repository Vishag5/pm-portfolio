            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Management Case Studies</h2>
            <p className="text-xl text-gray-600">
              Detailed case studies showcasing my approach to product challenges, problem-solving, and strategic thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Meesho Case Study */}
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

            {/* NoBroker Case Study */}
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
                    onClick={handleSurveyView}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
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

