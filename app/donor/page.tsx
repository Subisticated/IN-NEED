"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  User,
  Heart,
  QrCode,
  Award,
  History,
  Download,
  Edit,
  CheckCircle,
  Upload,
  Calendar,
  MapPin,
  Droplets,
} from "lucide-react"
import Link from "next/link"

export default function DonorPortal() {
  const [isAvailable, setIsAvailable] = useState(true)

  const donationHistory = [
    {
      id: 1,
      type: "Blood Donation",
      hospital: "City General Hospital",
      date: "2024-01-15",
      status: "Completed",
    },
    {
      id: 2,
      type: "Platelet Donation",
      hospital: "St. Mary's Medical Center",
      date: "2023-12-10",
      status: "Completed",
    },
    {
      id: 3,
      type: "Blood Donation",
      hospital: "Regional Medical Center",
      date: "2023-11-05",
      status: "Completed",
    },
  ]

  const badges = [
    { name: "First Time Donor", icon: "🩸", description: "Completed your first donation" },
    { name: "Life Saver", icon: "❤️", description: "Saved 5 lives through donations" },
    { name: "Regular Donor", icon: "⭐", description: "10+ donations completed" },
    { name: "Emergency Hero", icon: "🚨", description: "Responded to emergency calls" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">In Need</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, John Doe</span>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-600">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Edit className="mr-2 h-4 w-4" />
              My Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <QrCode className="mr-2 h-4 w-4" />
              QR Donor Card
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Award className="mr-2 h-4 w-4" />
              Badges
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Donation History
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Overview */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">John Doe</CardTitle>
                      <CardDescription className="text-lg">Blood Type: O+ | Age: 28</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Availability Status:</span>
                      <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
                      <span className={`text-sm ${isAvailable ? "text-green-600" : "text-gray-500"}`}>
                        {isAvailable ? "Available" : "Not Available"}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-gray-600">Total Donations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">36</div>
                      <div className="text-sm text-gray-600">Lives Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">4</div>
                      <div className="text-sm text-gray-600">Badges Earned</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consent Form Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    Consent Form Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Digital signature uploaded and verified</p>
                      <p className="text-xs text-gray-500">Last updated: January 15, 2024</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Update
                      </Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Donation History Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Donation History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donationHistory.map((donation, index) => (
                      <div key={donation.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Droplets className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{donation.type}</p>
                            <Badge variant="secondary">{donation.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {donation.hospital}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {donation.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Badges Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>Achievement Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {badges.map((badge, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                              <div className="text-2xl mb-2">{badge.icon}</div>
                              <div className="text-sm font-medium">{badge.name}</div>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{badge.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - QR Card */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Digital Donor Card</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg mb-4">
                    <div className="mb-4">
                      <Heart className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold text-lg">In Need</h3>
                      <p className="text-sm opacity-90">Official Donor Card</p>
                    </div>
                    <Separator className="my-4 bg-blue-400" />
                    <div className="text-left space-y-2">
                      <p>
                        <span className="font-semibold">Name:</span> John Doe
                      </p>
                      <p>
                        <span className="font-semibold">Blood Type:</span> O+
                      </p>
                      <p>
                        <span className="font-semibold">ID:</span> DN-2024-001234
                      </p>
                      <p>
                        <span className="font-semibold">Status:</span>
                        <Badge className="ml-2 bg-green-500">Available</Badge>
                      </p>
                    </div>
                    <div className="mt-4 bg-white p-3 rounded">
                      <div className="w-20 h-20 bg-gray-200 mx-auto rounded flex items-center justify-center">
                        <QrCode className="h-12 w-12 text-gray-600" />
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download QR Card
                  </Button>
                </CardContent>
              </Card>

              {/* Next Eligible Donation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Next Eligible Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">Available Now</div>
                    <p className="text-sm text-gray-600 mb-4">You can donate blood today</p>
                    <Progress value={100} className="mb-2" />
                    <p className="text-xs text-gray-500">Last donation: 65 days ago</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
